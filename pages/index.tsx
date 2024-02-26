import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AgeCalcuate from '../components/AgeCalculate'
export default function Home() {
  return (
    <div>
      <Image className='rounded-full mx-auto border-gray-300 border-4' src = "/profile_pic.jpg" width={150} height={150} alt="Picture of the author"></Image>
        <div className = " text-6xl text-blue-100 flex items-center flex-col  pt-0  text-center">
            Hi I&aposm Max,
        </div>
        <div className = " text-3xl text-blue-100 flex items-center flex-col  py-0  text-center">
            I am a {AgeCalcuate()} year old computer science student at the University of Bath
        </div>
    </div>
  )
}
