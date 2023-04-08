import { useEffect, useState } from 'react'
import {Tabs} from 'flowbite-react'

import AllMetrics from './AllMetrics'
import MyMetrics from './MyMetrics'
import AddMetric from './AddMetric'
import Loading from '../../../components/Loading'

import { MetricsAPI } from '../../../api/MetricsApi'

export default function Metrics(){

    const [metrics, setMetrics] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        MetricsAPI.getMetrics()
        .then((data) => {
            setMetrics(data)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])


    return (
        <>
            <div className="container my-8">
                <div className='font-bold text-5xl mb-4'>
                    Metrics
                </div>

                <Tabs.Group
                    aria-label="Exercice Tabs"
                    style="underline"
                    className="sticky top-0 z-10 bg-white dark:bg-gray-900"
                >
                    <Tabs.Item
                        title="All Metrics"
                        // icon={}
                    >
                        {loading ? <Loading /> : <AllMetrics metrics={metrics} />}
                    </Tabs.Item>
                    <Tabs.Item
                        title="My Metrics"
                        // icon={}
                    >
                        {loading ? <Loading /> : <MyMetrics metrics={metrics} />}
                    </Tabs.Item>
                    <Tabs.Item
                        title="Add Metric"
                        // icon={}
                    >
                        {loading ? <Loading /> : <AddMetric metrics={metrics} />}
                    </Tabs.Item>
                </Tabs.Group>
            </div>
        </>
    )
}