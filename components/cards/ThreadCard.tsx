import { formatDateString } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}
const ThreadCard = ({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
  isComment,
}: Props) => {
  return (
    <article className={`flex w-full flex-col rounded-xl ${isComment ? 'px-0 xs:px-7':' shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] p-7'}`}>
      <div className="flex items-center justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
              <Image
                src={author.image}
                alt="Profile Image"
                fill
                className="cursor-pointer rounded-full"
              />
            </Link>
            <div className="thread-card_bar" />
          </div>
          <div className="flex w-full flex-col">
            <Link
              href={`/profile/${author.id}`}
              className="w-fit "
            >
                <h4 className="cursor-pointer text-body-semibold text-gray-700">{author.name}</h4>
            </Link>
            <p className="mt-2 text-small-regular text-gray-500">{content}</p>
            <div className={`${isComment && 'mt-1'} mt-5 flex flex-col gap-3`}>
                <div className="flex gap-3.5">
                    <Image src="/assets/heart-gray.svg" alt="heart" width={24} height={24} className="cursor-pointer"/>
                    <Link href={`/thread/${id}`}>
                        <Image src="/assets/reply.svg" alt="reply" width={24} height={24} className="cursor-pointer"/>
                    </Link>
                    <Image src="/assets/repost.svg" alt="repost" width={24} height={24} className="cursor-pointer"/>
                    <Image src="/assets/share.svg" alt="share" width={24} height={24} className="cursor-pointer"/>
                </div>
                {
                    isComment && comments.length >0 && (
                        <Link href={`/thread/${id}`}>
                            <p className="mt-1 text-subtle-medium text-gray-1">{comments.length}replies</p>
                        </Link>
                    )
                }
            </div>
          </div>
        </div>
        </div>
        {!isComment && community && (
        <Link
          href={`/communities/${community.id}`}
          className='mt-5 flex items-center'
        >
          <p className='text-subtle-medium text-gray-1'>
            {formatDateString(createdAt)}
            {community && ` - ${community.name} Community`}
          </p>

          <Image
            src={community.image}
            alt={community.name}
            width={14}
            height={14}
            className='ml-1 rounded-full object-cover'
          />
        </Link>
      )}
    </article>
  );
};

export default ThreadCard;