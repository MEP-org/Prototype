import {Tabs, Spinner} from "flowbite-react"
import { BsFileRichtextFill, BsDatabaseDown, BsBarChartFill } from "react-icons/bs";
import { BiCog } from "react-icons/bi";
import Description from "./Description"
import Evaluation from "./Evaluation"
import Datasets from "./Datasets"
import Results from "./Results"

export default function ExercicesTab(props){

    const {handleChange, exercice, classes, loading} = props

    const renderLoading = () => {
        return (
            <div className='flex center'>
                <Spinner size='xl' />
            </div> 
        )
    }

    const tabs = [
        {
            title: "Description",
            icon: BsFileRichtextFill, 
            content: loading ? renderLoading() : 
            <Description handleChange={handleChange} exercice={exercice} classes={classes}/>
        },
        {
            title: "Evaluation Rules", 
            icon: BiCog, 
            content: loading ? renderLoading() : 
            <Evaluation handleChange={handleChange} exercice={exercice} />
        },
        {
            title: "Datasets", 
            icon: BsDatabaseDown, 
            content: loading ? renderLoading() : 
            <Datasets handleChange={handleChange} exercice={exercice} />
        },
        {
            title: "Results", 
            icon: BsBarChartFill, 
            content: loading ? renderLoading() : 
            <Results exercice={exercice} />
        },
    ]
    if (!exercice.id) tabs.pop() // remove results tab if exercice is not created yet

    return (
        <>
            <Tabs.Group
                aria-label="Exercice Tabs"
                style="underline"
                className="sticky top-0 z-10 bg-white dark:bg-gray-900"
            >
                {tabs.map((tab) => {
                    return (
                        <Tabs.Item
                            key={tab.title}
                            title={tab.title}
                            icon={tab.icon}
                        >
                            {tab.content}
                        </Tabs.Item>
                    )
                })}
            </Tabs.Group>
        </>
    )
}