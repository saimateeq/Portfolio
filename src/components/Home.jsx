import React, { useEffect, useState } from 'react'
import myImage from "../images/myAvatar.png"
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Home = () => {
    const [Profession, setProfession] = useState("")
    const [ProColor, setProColor] = useState("")
    const pro = ["Front end Developer", "React Developer", 'Web Designer']
    const ProfessionFunc = () => {
        let i = 0
        let TextDeleting = false;
        let words = 0;
        const speed = 150;
        const typeText = () => {
            {
                i === 0 ? setProColor("profession text-red-500") :
                (i === 1 ? setProColor("profession text-yellow-500") :
                    (i === 2 ? setProColor("profession text-blue-500") : ""))
            }
            if (!TextDeleting) {
                let text = pro[i].substring(0, words)
                setProfession(text)
                words++;
            }
            if (words > pro[i].length) {
                TextDeleting = true;
            }
            if (TextDeleting) {
                let text = pro[i].substring(0, words)
                setProfession(text)
                words--;
                if (words === 0) {
                    TextDeleting = false;
                    i++
                    if (i > 2) {
                        i = 0
                    }
                }
            }
            setTimeout(typeText, TextDeleting ? speed / 3 : speed);
        };
        typeText();
    }
    useEffect(() => {
        ProfessionFunc()
    }, [])
    return (
        <section id='home' className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center w-4/5 mt-20  justify-between">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl  mb-4 text-blue-900 font-bold text-4xl" >
                        Hi There,
                        <br className="hidden lg:inline-block" />
                        <br className="hidden lg:inline-block" />
                        Iam <span className='text-white bg-gray-800 p-2 max-sm:block'>Saim Ateeq</span>
                    </h1>
                    <p className="mb-8 leading-relaxed text-black font-bold text-2xl ">
                        Iam a <span className={`${ProColor} `}>{Profession}</span>
                    </p>
                    <div className="flex justify-center">
                            <ScrollLink to='about' smooth={true} duration={500} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg " >
                                About me
                            </ScrollLink>
                    </div>
                </div>
                <div className="max-sm:w-1/2 w-1/3">
                    <img
                        className="object-cover object-center rounded-full w-full "
                        alt="error"
                        src={myImage}
                    />
                </div>
            </div>
        </section>

    )
}
export default Home
