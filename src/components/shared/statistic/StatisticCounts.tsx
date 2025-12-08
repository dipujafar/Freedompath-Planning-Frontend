import CCountUp from '../CCountUp'

const defaultData = [
    {
        id: 1,
        count: 500,
        title: "Projects Completed"
    },
    {
        id: 2,
        count: 15,
        title: "Years Experience"
    }
]

type TStatisticCounts = {
    data?: typeof defaultData
}

export default function StatisticCounts({ data = defaultData }: TStatisticCounts) {
    return (
        <div className="flex items-center flex-wrap gap-4">
            {
                data.map((item) => (
                    <div key={item.id} className="flex-1">
                        <span className="xl:text-5xl md:text-3xl text-xl font-bold"> <CCountUp end={item.count} />+</span>
                        <p className="text-sm text-[#4B5563] truncate">{item.title}</p>
                    </div>
                ))
            }
        </div>
    )
}
