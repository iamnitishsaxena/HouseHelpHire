import { Box, Button, styled, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routePath } from "../routes/route";
import { savePost } from "../components/services/api";

const Component = styled(Box)({
    padding: '80px 200px',
    background: '#F5F5F5'
})

const Container = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    background: '#FFFFFF',
    alignItems: 'center',
    padding: '0 70px',
    borderRadius: 20,
    '& > p': {
        fontSize: 35,
        fontWeight: 600,
        opacity: '0.7'
    }
})

const FormWrapper = styled(Box) ({
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    marginTop:20,
    borderRadius: 20,
    background: '#FFFFFF',
    '& > *':{
        marginTop: '20px !important'
    }
})

const defaultObj = {
    profile: '',
    type: '',
    description: '',
    experience: '',
    skills: [],
    salary: '',
    location: '',
}

const options = {
    type: ['Full-time', 'Part-time', 'Live-in', 'Live-out'],
    experience: ['0-2 Years', '3-5 Years', '5 Years or more'],
    skills: ['Cooking', 'Cleaning', 'Childcare', 'Elderly Care', 'Driving', 'Pet Care', 'Gardening', 'Laundry & Ironing', 'Home Maintenance', 'Grocery Shopping & Errands', 'Security & Watchman', 'Housekeeping Management', 'Guest Handling & Hospitality', 'Tutoring & Homework Help', 'Event Assistance'],
    salary: ['Rs 0-5000', 'Rs 5000-10000', 'Rs 10000-15000', 'Rs 15000-20000', 'Rs 20000-30000', 'Rs 30000-50000', 'Rs 50000 or more']

}

const CreatePost = () => {
    const [data, setData] = useState(defaultObj);
    const image = "HH.png";

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const saveJob = async () => {
        await savePost(data);
        navigate(routePath.posts);
    }

    const navigate = useNavigate();
    return(
        <>
        <Header/>
        <Component>
            <Container>
                <Typography>Create a Job Post</Typography>
                <img src={image} alt="create" style={{width: 400, height: 350}}/>
            </Container>
            <FormWrapper>
                <TextField
                    placeholder="Job Title"
                    name="profile"
                    onChange={handleChange}
                />
                <Dropdown
                    label="Job Type"
                    id='job-type-label'
                    value={data.type}
                    handleChange={handleChange}
                    name="type"
                    options={options.type}
                />
                <TextField
                    placeholder="Job Description"
                    name="description"
                    onChange={handleChange}
                />
                <Dropdown
                    label="Experience"
                    id='job-experience-label'
                    value={data.experience}
                    handleChange={handleChange}
                    name="experience"
                    options={options.experience}
                />
                <Dropdown
                    label="Skills"
                    id='job-skills-label'
                    value={data.skills}
                    handleChange={handleChange}
                    name="skills"
                    options={options.skills}
                    multiple
                />
                <Dropdown
                    label="Salary"
                    id='job-salary-label'
                    value={data.salary}
                    handleChange={handleChange}
                    name="salary"
                    options={options.salary}
                />
                <TextField
                    placeholder="Job Location"
                    name="location"
                    onChange={handleChange}
                />
                <Button variant="contained" onClick={() => saveJob()}>Save Job</Button>
            </FormWrapper>
        </Component>
        </>
    )
}

export default CreatePost;