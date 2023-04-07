import{ useState } from 'react'
import { Label, TextInput, Dropdown, Checkbox } from 'flowbite-react'
import DatePicker from "tailwind-datepicker-react"
import MarkdownEditor from "../../../components/MarkdownEditor"

export default function Evaluation(props){

    const {exercice, handleChange} = props
    const [show, setShow] = useState(false)
	const handleChangeDate = (selectedDate) => {
		console.log(selectedDate)
	}
	const handleClose = (state) => {
		setShow(state)
	}

    const value = exercice.evaluationRules || "# Evaluation rules"
    const setValue = (value) => {
        handleChange({target: {name: "evaluationRules", value: value}})
    }

	return (
        <>
            <div className='flex gap-10'>

                <div className="relative w-[296px]">
                    <Label>Deadline date</Label>
                    <div className='mt-2'/>
                    <DatePicker 
                        onChange={handleChangeDate} 
                        show={show} 
                        setShow={handleClose} 
                        classNames="absolute"
                        options={{
                            autoHide: false,
                            theme:{
                                selected: "hover:bg-blue-500 dark:hover:bg-blue-500",
                            }
                        }}
                    />
                </div>

                <div>
                    <Label>Attempts limit</Label>
                    <div className='mt-2'/>
                    <TextInput 
                        name="attemptsLimit" 
                        type="number" 
                        placeholder="Unlimited" 
                        onChange={props.handleChange} 
                        value={props.exercice.attemptsLimit} 
                    />
                </div>

                <div className="w-96">
                    <Label>Metrics</Label>
                    <div className='mt-2'/>
                    <Dropdown
                        label='Choose metrics'
                        dismissOnClick={false}
                    >
                        <Dropdown.Item>
                            <Checkbox
                                id="accuracy"
                                name="accuracy"
                                value={false}
                                onChange={() => {}}
                                className="mr-2"
                            />
                            <Label htmlFor="accuracy" className="cursor-pointer">Accuracy</Label>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Checkbox
                                id="precision"
                                name="precision"
                                value={false}
                                onChange={() => {}}
                                className="mr-2"
                            />
                            <Label htmlFor="precision" className="cursor-pointer">Precision</Label>
                        </Dropdown.Item>
                    </Dropdown>
                </div>

            </div>

            <div className="mt-4"/>
            <Label>Evaluation rules</Label>
            <div className='h-[80vh] mt-2'>
                <MarkdownEditor type='Evaluation' value={value} setValue={setValue} />
            </div>
        </>
		
	)
}