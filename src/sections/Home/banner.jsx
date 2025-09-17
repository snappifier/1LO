import strapiImages from '../../assets/photos.jsx';

export default function Banner() {
    return (
        <>
            <div className={`relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center bg-cover bg-bottom drop-shadow-lg/60 `}
            style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${strapiImages["zdj1"]})`}}>
                <p className="relative text-white font-[meow_script] text-5xl md:text-9xl " >"Myślę więc jestem...<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;w Pierwszym”</p>
            </div>
        </>
    );
}
