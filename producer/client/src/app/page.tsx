import ProducerForm from "@/components/ProducerForm";

export default function Home() {
  return <div className="w-full h-[80vh] flex flex-col justify-center items-center gap-8">
    <h1 className="text-2xl font-bold">Producer</h1>
    <ProducerForm/>
    </div>
}