import Image from "next/image"

function RightSidebar() {
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-col flex-1 justify-start">
        <h3 className="text-heading-4 text-dark-1">Suggested Communities</h3>
        <div className="">
          <h4 className="leftsidebar_link bg-LG-1 m-6 text-light-1 ">Renuka Agrotech</h4>
          <h4 className="leftsidebar_link bg-LG-1 m-6 text-light-1">Sayadhri farms</h4>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-start">
      <h3 className="text-heading-4 text-dark-1">Suggested Users</h3>
      <div className="p-5">
        <div className="flex flex-row m-2">
        <Image src="/assets/a_image.png" alt="heart" width={24} height={24} className="cursor-pointer"/>
        <h4 className="ml-3">Akshat</h4>
        </div>
        <div className="flex flex-row m-2">
        <Image src="/assets/s_image.png" alt="heart" width={24} height={24} className="cursor-pointer"/>
        <h4 className="ml-3">Suyash</h4>
        </div>
        <div className="flex flex-row m-2">
        <Image src="/assets/s2.png" alt="heart" width={24} height={24} className="cursor-pointer"/>
        <h4 className="ml-3">Siddhesh</h4>
        </div>
      </div>
      </div>
    </section>
  )
}

export default RightSidebar