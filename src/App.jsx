import Random from './components/Random';
import Tag from './components/Tag'


export default function App() {
  return ( 
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="ml-[25px] px-10 py-2 absolute bg-white rounded-sm text-center w-full mt-[40px] text-4xl mx-auto w-11/12">Random Gifs</h1>
      <div className="flex flex-col items-center w-full gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
