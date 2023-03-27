import { useEffect, useState } from "react"
import Banner from './Banner';
import MyClasses from './MyClasses';
import { ClassesAPI } from "../../../api/ClassesAPI";

export default function Classes(){

    const [loading, setLoading] = useState(false);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        setLoading(true);
        const profId = 1;
        ClassesAPI.getByProfessor(profId)
        .then((data) => {
            setClasses(data);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);

    return (
        <>
            {/* <div className='container py-10 h-full bg-white dark:bg-gray-900'> */}
                <div className='container py-10 mt-8 backdrop-blur-xl border border-gray-200 rounded-lg shadow dark:border-gray-700'>
                <Banner />
                <div className='h-8'></div>
                <MyClasses classes={classes} loading={loading} />
            </div>
        </>
    )
}
