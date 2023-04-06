import {Tabs} from 'flowbite-react'

import AllMetrics from './AllMetrics'
import MyMetrics from './MyMetrics'
import AddMetric from './AddMetric'

export default function Metrics(){

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
                        <AllMetrics />
                    </Tabs.Item>
                    <Tabs.Item
                        title="My Metrics"
                        // icon={}
                    >
                        <MyMetrics />
                    </Tabs.Item>
                    <Tabs.Item
                        title="Add Metric"
                        // icon={}
                    >
                        <AddMetric />
                    </Tabs.Item>
                </Tabs.Group>
            </div>
        </>
    )
}