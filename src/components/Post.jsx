import aktu3 from "../assets/aktu/aktu3.jpg";

export const Post = () => {
    return (<>
        <div className=" relative pt-40 px-[45vh] w-full h-max flex flex-col items-start gap-10">
            <div className="w-full flex flex-col items-center justify-between ">
            <p className="font-[poppins] font-semibold text-5xl text-black">MATURY ROK SZKOLNY 2025</p>
            <p className="font-[montserrat] font-">Krystian Matwiej | 21.08.2025</p>
            </div>
            <img src={aktu3} alt="post1" className="w-full h-auto" />
            <p className="font-[poppins] text-justify text-balance">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque lorem non sem sodales convallis. Cras convallis quis ipsum et lobortis. Sed lacinia, urna non lobortis vehicula, dolor nisl rutrum libero, et facilisis mauris enim sit amet justo. Integer viverra quis ipsum tincidunt fermentum. Ut at tristique metus, vel fringilla dui. Donec et felis diam. Integer efficitur, arcu a vestibulum accumsan, sem ante rhoncus erat, a mollis risus odio in ligula. Aliquam non accumsan leo. Nulla sodales ex sem, vel pellentesque turpis vehicula eget. Aenean vel ligula sollicitudin, mattis ex non, bibendum odio.

                Cras at dui a nisl rhoncus varius eu ut elit. Donec blandit tempor nisl. Suspendisse sed arcu convallis, molestie augue at, efficitur augue. Proin ante dui, finibus vel interdum a, egestas sed justo. Praesent quis pharetra mi, sed fermentum est. Praesent vel tristique urna, nec tristique felis. Curabitur tristique varius risus sed tincidunt. Proin vehicula vel odio molestie gravida. Morbi ultrices felis massa, posuere porta odio consectetur id. Maecenas rutrum dui eu pellentesque ullamcorper. Fusce vulputate nisl nisl, non feugiat tellus fringilla nec.

                Maecenas eu ipsum ut lorem rhoncus posuere. Curabitur a velit neque. Nunc sit amet tortor sed massa ultrices vestibulum nec in leo. Nulla nec imperdiet sapien. Vivamus vel leo nec risus pharetra pulvinar. Donec semper nunc diam, nec gravida diam pulvinar a. Mauris eget lorem felis. Donec pretium euismod risus ut molestie. In fringilla ligula ac magna tristique, condimentum sollicitudin ipsum auctor. Praesent consectetur nibh eu dolor lobortis, sit amet sagittis libero sagittis. Proin volutpat metus id dui dictum convallis. Duis et nisi id risus hendrerit suscipit.

                Aliquam erat volutpat. Nam est sapien, luctus a ex in, ullamcorper eleifend elit. Morbi sollicitudin eget ante non suscipit. Aenean placerat bibendum leo ac hendrerit. Ut id venenatis tellus. Proin quis urna tristique, porta nisi at, dapibus neque. Duis a leo vestibulum, luctus nisl quis, blandit neque. Duis semper vel magna sed laoreet. Integer ac odio vestibulum, sollicitudin augue bibendum, vestibulum justo. Duis malesuada, tellus eget rhoncus vehicula, magna metus sagittis nisi, vel commodo ex dolor at nisi.</p>
        </div>
    </>)
}