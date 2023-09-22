"use client"
import {sidebarLinks} from "@/constants"
import { SignOutButton, SignedIn,useAuth } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import {usePathname,useRouter} from "next/navigation"
function LeftSidebar() {
  const pathname=usePathname();
  const router=useRouter();
  const {userId}=useAuth();
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex flex-col w-full flex-1 gap-6 px-6">
        {
          (sidebarLinks.map((link)=>{
            const isActive=(pathname.includes(link.route) && link.route.length>1)||pathname===link.route;

            if(link.route === '/profile') link.route = `${link.route}/${userId}`
           

            return (
              <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && 'bg-LG-1'}`}
              >
                <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
                // style={{color:'black'}}
                />
                <p className="text-dark-1 max-lg:hidden"
                >{link.label}</p>
              </Link>
            )
          }))
        }
      </div>
      <div className="mt-10 px-6">
      <SignedIn>
            <SignOutButton signOutCallback={()=>router.push('/sign-in')}>
              <div className='flex cursor-pointer gap-4 p-4'>
                <Image
                  src='/assets/logout.svg'
                  alt='logout'
                  width={24}
                  height={24}
                />
                <p className="text-dark-2 max-lg:hidden">Logout</p>
              </div>
            </SignOutButton>
          </SignedIn>
      </div>
    </section>
  )
}

export default LeftSidebar