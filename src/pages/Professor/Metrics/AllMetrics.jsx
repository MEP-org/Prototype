import MetricCard from "./MetricCard"

export default function AllMetrics() {

    const metrics = [
        {
            id: 1,
            name: "Metric 1",
            description: "This is a metric",
            author: "Professor 1",
        },
        {
            id: 2,
            name: "Metric 2",
            description: "This is a metric",
            author: "Professor 2",
        },
    ]

    return (
        <>
            <div className='grid grid-cols-3 gap-8'>
                {metrics.map((metric) => {
                    return (
                        <MetricCard metric={metric} key={metric.id} />
                    )
                })}
            </div>
        </>
    )
}