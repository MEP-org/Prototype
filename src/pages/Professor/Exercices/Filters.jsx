import React from 'react'
import { Label, TextInput, Select } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa'

function Filters(props){

    const {filter, setFilter, exercices} = props;
    const classes = exercices.map((exercice) => {
        return {
            'id': exercice.class.id,
            'name': exercice.class.name
        }
    });

    const handleFilter = (e, key) => {
        console.log(e.target.value);
        setFilter({
            ...filter,
            [key]: e.target.value
        })
    }

    return (
        <>
            <div data-aos="fade-up" className='grid grid-cols-4 gap-10 delay-100'>

                <div className='col-span-2 '>
                    <Label htmlFor="search" value="Tittle" />
                    <div className='mb-2' />
                    <TextInput
                        id="search"
                        type="text"
                        rightIcon={FaSearch}
                        placeholder="Search"
                        onChange={(e) => handleFilter(e, 'title')}
                    />
                </div>

                <div>
                    <Label htmlFor="filter" value="Filter by class" />
                    <div className='mb-2' />
                    <Select 
                        id="filter" 
                        onChange={(e) => handleFilter(e, 'filter')}
                    >
                        <option value="all">All</option>
                        {classes.map((classe) => {
                            return (
                                <option value={classe.id} key={classe.id}>{classe.name}</option>
                            )
                        })}
                    </Select>
                </div>

                <div>
                    <Label htmlFor="sort" value="Sort by" />
                    <div className='mb-2' />
                    <Select 
                        id="sort" 
                        onChange={(e) => handleFilter(e, 'sort')}
                    >
                        <option value="recent">Recent</option>
                        <option value="oldest">Oldest</option>
                        <option value="closestDeadline">Closest Deadline</option>
                        <option value="farthestDeadline">Farthest Deadline</option>
                    </Select>
                </div>

            </div>
        </>
    )
}

export default Filters