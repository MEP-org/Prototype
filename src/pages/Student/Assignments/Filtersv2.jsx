import { React, useState } from 'react';
import { Label, TextInput, Select } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa'
import { ImFilter } from "react-icons/im";


function Filtersv2(props) {
    const [isOpen, setIsOpen] = useState(false);
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

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const applyFilters = () => {
        console.log('apply filters');
        toggleDrawer();
    };

    return (
        <>
            <button className="my-btn h-10" onClick={toggleDrawer} aria-hidden="true">
                Filter Assignments
                <ImFilter className="ml-2" />
            </button>

            <div className={`fixed z-20 inset-y-0 right-0 lg:w-1/4 md:w-1/2 w-full bg-white shadow-lg transform transition duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6">

                    <div className='mb-8'>
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

                    <div className='mb-8'>
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

                    <div className='mb-8'>
                        <Label htmlFor="deadline" value="Deadline" />
                        <div className='mb-2' />
                        <Select 
                            id="deadline" 
                            onChange={(e) => handleFilter(e, 'deadline')}
                        >
                            <option value="all">All</option>
                            <option value="open">Open</option>
                            <option value="closed">Closed</option>
                        </Select>
                    </div>

                    <div className='mb-8'>
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


                    <button className="my-btn h-10" onClick={applyFilters} aria-hidden="true">
                        Apply filters
                    </button>

                </div>
            </div>
        </>
    );

}

export default Filtersv2;