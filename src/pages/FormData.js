import React, { useEffect, useState } from 'react'
import "../pages/App.css"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import Input from '@mui/base/Input';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import { TextField } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormHelperText, { formHelperTextClasses } from '@mui/material/FormHelperText';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Gender, Guardian, Id, selectState, cities, Religion, Marital, Blood_Group} from "./Data"
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import axios, { Axios } from "axios";

const  FormData = () => {


  var [govt, setGovt] = useState("");
  var [guardian, setGuardian] = useState("");
  var [state, setState] = useState("");
  var [city, setCity] = useState("");
  var [country,setCountry] = useState("");
  var [religion,setReligion] = useState("");
  var [marit,setMarit] = useState("");
  var [blood,setBlood] = useState("");
  var [nationality,setNationality] = useState("");
  var [value,setValue] = useState("");
  const Nation = (e) =>{
    setNationality(e.target.value)
  }

  const close = () => {
    setNationality("")
  }


  const selectBlood = (e) => {
    setBlood(e.target.value)
  }
  const selectMarital = (e) => {
setMarit(e.target.value)
  }
   const selectReligion = (e) => {
    setReligion(e.target.value)
   }

  const textChange = (e) =>{
setCountry(e.target.value)
  }

 const closes = () => {
  setCountry("")
 }


   
  const selectCity = (e) => {
    setCity(e.target.value)
  }

  const changes = (e) => {
    setGuardian(e.target.value)

  }

  const states = (e) => {
    setState(e.target.value)

  }


  const change = (e) => {
    setGovt(e.target.value)

  }
  if (govt === "") {
    var schemas = yup.object({
      Name: yup.string().required("Name is required "),
      age: yup.string().required("age is required").matches(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/, "please enter Age in this format DD/MM/YYYY"),
      Sex: yup.string().required("this field is required"),


    }).required()
  } else if (govt === "PAN") {

    var schemas = yup.object({
      Name: yup.string().required("Name is required "),
      age: yup.string().required("age is required").matches(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/, "please enter Age in this format DD/MM/YYYY"),
      Sex: yup.string().required("this field is required"),
      Mobile: yup.string().required("it is required").matches(/^[6-9]\d{9}$/, "please Enter a valid indian number"),
      ID: yup.string().required("please select An ID"),
      Id_Number: yup.string().required("please select An ID and put the number").matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "invalid PAN number"),
      Email: yup.string().required("please enter valid email").email(),
      Emergency_Contact_Number: yup.string().required("it is required").matches(/^[6-9]\d{9}$/, "please Enter a valid indian number"),
      pinCode:yup.number().required("enter number")
    }).required()

  } else if (govt === "Aadhar") {
    var schemas = yup.object({
      Name: yup.string().required("Name is required "),
      age: yup.string().required("age is required").matches(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/, "please enter Age in this format DD/MM/YYYY"),
      Sex: yup.string().required("this field is required"),
      Mobile: yup.string().required("it is required").matches(/^[6-9]\d{9}$/, "please Enter a valid indian number"),
      ID: yup.string().required("please select An ID"),
      Id_Number: yup.string().required("please select An ID and put the number").matches(/^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$/, "invalid Aadhar number"),
      Email: yup.string().required("please enter valid email").email(),
      Emergency_Contact_Number: yup.string().required("it is required").matches(/^[6-9]\d{9}$/, "please Enter a valid indian number"),
      pinCode:yup.number().required("enter number")
    }).required()
  } else {

  }

 

  const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schemas) });
  const onSubmit = Data => axios.post("http://localhost:5000",Data)
  .then(res=>console.log(res.data))
  .catch(err=>console.log(err))


 
  

  

  
//  setData([...data,Data]) &&  localStorage.setItem("userData",JSON.stringify(data));

  // var schema = yup.object({
  //   firstName: yup.string().required("Name is required "),
  //   age: yup.string().required("age is required"),
  //   Sex: yup.string().required("this field is required"),
  //   Mobile: yup.string().required("it is required").matches(/^[6-9]\d{9}$/, "please Enter a valid indian number"),
  //   ID:yup.string().required("please select An ID"),



  // }).required();


  

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Button variant='contained'  ><Link style={{ textDecoration: "none", color: "white" }} to="/Users">users Data</Link> </Button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} method="POST" action="/post-feedback">

        {/* //xs sm md lg xl */}
        <Grid container spacing={2} maxWidth="xl" style={{ marginTop: "50px",  }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
            <a href='#' id='anchor'><h2 style={{ color: "black", textDecoration: "none" }}>Personal Details</h2><hr style={{ marginTop: "-25px", color: "black" }} /></a>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5} xl={5} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel htmlFor="my-input" style={{ marginRight: "20px" }}  >Name<StarRateIcon color='error' style={{ fontSize: "10px", marginBottom: "5px", marginLeft: "-1px" }} /></InputLabel>
            <TextField sx={{ width: "400px" }}

              {...register("Name", { required: true })}
              error={!!errors?.Name}
              helperText={errors?.Name?.message}
              aria-invalid={errors.Name ? "true" : "false"}
              id="my-input"
              label="Enter Name"
            />


          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel htmlFor="input" style={{ marginRight: "20px" }}>Date of Birth or <br /> Age<StarRateIcon color='error' style={{ fontSize: "10px", marginBottom: "5px", marginLeft: "-1px" }} /></InputLabel>
            <TextField sx={{ width: "250px" }} type="text"
              {...register("age", { required: true })}
              error={!!errors?.age}
              helperText={errors?.age?.message}
              aria-invalid={errors.age ? "true" : "false"}
              id="input"
              label="DD/MM/YYYY or Age in Years"
            />

          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel id="inputs" style={{ marginRight: "20px" }}>Sex<StarRateIcon color='error' style={{ fontSize: "10px", marginBottom: "5px", marginLeft: "-1px" }} /></InputLabel>
            <FormControl >
              <InputLabel id="demo-simple-select-label">Enter Sex</InputLabel>
              <Select
                {...register("Sex", { required: true })}
                error={!!errors?.Sex}


                labelId="inputs"
                id="inputs"
                label="inputs"
                sx={{ width: "150px" }}

              >


                {Gender.map((option, index) => {
                  return <MenuItem key={index} value={option.value}>{option.text}</MenuItem>
                })}
              </Select>
              <FormHelperText style={{ color: "red" }}>{errors?.Sex?.message}</FormHelperText>
            </FormControl>


          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={5} xl={5} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel htmlFor="Mobile" style={{ marginRight: "20px" }} >Mobile</InputLabel>
            <TextField sx={{ width: "350px" }}
              {...register("Mobile")}
              error={!!errors?.Mobile}
              helperText={errors?.Mobile?.message}
              aria-invalid={errors.Mobile ? "true" : "false"}
              id="Mobile"
              label="Enter Mobile"

            />


          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel id="inputes" style={{ marginRight: "20px" }}>Govt Issued ID</InputLabel>
            <FormControl >
              <InputLabel id="demo-simple-select-label">ID Type</InputLabel>
              <Select
                {...register("ID", { required: true })}
                error={!!errors?.ID}
                className='changed'
                onChange={change}
                labelId="inputes"
                id="inputes"
                label="inputes"
                sx={{ width: "200px" }}
                value={govt}
              >


                {Id.map((elem, index) => {
                  return <MenuItem key={index} value={elem.value}>{elem.text}</MenuItem>
                })}
              </Select>
              <FormHelperText style={{ color: "red" }}>{errors?.ID?.message}</FormHelperText>
            </FormControl>


          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={3} xl={3} style={{ display: "flex", alignItems: "center" }}>

            <TextField className='text'
              {...register("Id_Number")}
              error={!!errors?.Id_Number}
              helperText={errors?.Id_Number?.message}
              aria-invalid={errors.Id_Number ? "true" : "false"}
              labelid="inputes"
              id="inputes"
              label="Enter Govt ID"

            />


          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
            <a href='#' id='anchor'><h2 style={{ color: "black", textDecoration: "none" }}>Contact Details</h2><hr style={{ marginTop: "-25px", color: "black" }} /></a>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel id="inputesDetails" style={{ marginRight: "20px" }}>Guardian  Details</InputLabel>
            <FormControl >
              <InputLabel id="demo-simple-select-label">Enter label</InputLabel>
              <Select
                {...register("GuardianLabel", { required: true })}
                error={!!errors?.ID}
                className='changed'
                onChange={changes}
                labelId="inputesDetails"
                id="inputesDetails"
                label="inputesDetails"
                sx={{ width: "150px" }}
                value={guardian}
              >


                {Guardian.map((elem, index) => {
                  return <MenuItem key={index} value={elem.value}>{elem.text}</MenuItem>
                })}
              </Select>
              <FormHelperText style={{ color: "red" }}>{errors?.ID?.message}</FormHelperText>
            </FormControl>




            <TextField sx={{ width: "200px" }} className='texted'
              {...register("GuardianName")}
              error={!!errors?.GuardianName}
              helperText={errors?.GuardianName?.message}
              aria-invalid={errors.GuardianName ? "true" : "false"}
              labelid="inputesDetails"
              id="inputes"
              label="Enter Name"

            />


          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel className='Email' sx={{ left: "100px" }} htmlFor="my-inputes" style={{ marginRight: "20px" }}  >Email</InputLabel>
            <TextField className='Email' sx={{ width: "250px", left: "100px" }}

              {...register("Email", { required: true })}
              error={!!errors?.Email}
              helperText={errors?.Email?.message}
              aria-invalid={errors.Email ? "true" : "false"}
              id="my-inputes"
              label="Enter Email"

            />


          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel htmlFor="Mobiles" style={{ marginRight: "20px" }} >Emergency Contact <br /> Number</InputLabel>
            <TextField sx={{ width: "200px" }}
              {...register("Emergency_Contact_Number")}
              error={!!errors?.Emergency_Contact_Number}
              helperText={errors?.Emergency_Contact_Number?.message}
              aria-invalid={errors.Emergency_Contact_Number ? "true" : "false"}
              id="Mobiles"
              label="Enter Emergency No"

            />


          </Grid>


          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
            <a href='#' id='anchor'><h2 style={{ color: "black", textDecoration: "none" }}>Address Details</h2><hr style={{ marginTop: "-25px", color: "black" }} /></a>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel htmlFor="Address" style={{ marginRight: "20px" }} >Address</InputLabel>
            <TextField sx={{ width: "300px" }}
              {...register("Address")}
              error={!!errors?.Address}
              helperText={errors?.Address?.message}
              aria-invalid={errors.Address ? "true" : "false"}
              id="Address"
              label="Enter Address"

            />


          </Grid>


          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel id="State" style={{ marginRight: "20px" }}>State</InputLabel>
            <FormControl >
              <InputLabel id="demo-simple-select-label">Enter State</InputLabel>
              <Select
                {...register("State", { required: true })}
                
                error={!!errors?.State}
                className='changed'
                onChange={states}
                labelId="State"
                id="State"
                label="State"
                sx={{ width: "300px" }}
                value={state}
              >


                {selectState.map((elem, index) => {
                  return <MenuItem key={index} value={elem.value}>{elem.text}</MenuItem>
                })}
              </Select>
              <FormHelperText style={{ color: "red" }}>{errors?.States?.message}</FormHelperText>
            </FormControl>


          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel id="city" style={{ marginRight: "20px" }}>City</InputLabel>
            <FormControl >
              <InputLabel id="demo-simple-select-label">Enter City</InputLabel>
              <Select
                {...register("City", { required: true })}
                error={!!errors?.City}
                className='changed'
                onChange={selectCity}
                labelId="city"
                id="city"
                label="city"
                sx={{ width: "300px" }}
                value={city}
              >


                {cities.map((elem, index) => {
                  return <MenuItem key={index} value={elem.value}>{elem.text}</MenuItem>
                })}
              </Select>
              <FormHelperText style={{ color: "red" }}>{errors?.City?.message}</FormHelperText>
            </FormControl>


          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel htmlFor="Country" style={{ marginRight: "20px" }} >Country</InputLabel>
            <TextField sx={{ width: "200px" }}
              {...register("Country")}
              error={!!errors?.Country}
              onChange={textChange}
              value={country}
              helperText={errors?.Country?.message}
              aria-invalid={errors.Country ? "true" : "false"}
              id="Country"
              label="Enter Country"
               InputProps={{endAdornment:<IconButton onClick={closes}>
                <CloseIcon/>
               </IconButton>}}
            />
           


          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel htmlFor="pinCode" style={{ marginRight: "20px" }} >pinCode</InputLabel>
            <TextField sx={{ width: "200px" }}
              {...register("pinCode")}
              error={!!errors?.pinCode}
              
              
              helperText={errors?.pinCode?.message}
              aria-invalid={errors.pinCode ? "true" : "false"}
              id="pinCode"
              label="Enter pinCode"
               
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
            <a href='#' id='anchor'><h2 style={{ color: "black", textDecoration: "none" }}>Other Details</h2><hr style={{ marginTop: "-25px", color: "black" }} /></a>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={3} xl={3} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel htmlFor="Occupation" style={{ marginRight: "20px" }} >Occupation</InputLabel>
            <TextField sx={{ width: "180px" }}
              {...register("Occupation")}
              error={!!errors?.Occupation}
              
              
              helperText={errors?.Occupation?.message}
              aria-invalid={errors.Occupation ? "true" : "false"}
              id="Occupation"
              label="Enter Occupation"
               
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={3} xl={3} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel id="Religion" style={{ marginRight: "20px" }}>Religion</InputLabel>
            <FormControl >
              <InputLabel id="demo-simple-select-label">Enter Religion</InputLabel>
              <Select
                {...register("Religion", { required: true })}
                error={!!errors?.Religion}
                className='changed'
               onChange={selectReligion}
                labelId="Religion"
                id="Religion"
                label="Religion"
                sx={{ width: "180px" }}
                value={religion}
              >


                {Religion.map((elem, index) => {
                  return <MenuItem key={index} value={elem.value}>{elem.text}</MenuItem>
                })}
              </Select>
              <FormHelperText style={{ color: "red" }}>{errors?.Religion?.message}</FormHelperText>
            </FormControl>


          </Grid>
 
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel id="Marital" style={{ marginRight: "20px" }}>Marital</InputLabel>
            <FormControl >
              <InputLabel id="demo-simple-select-label">Enter Marital Status</InputLabel>
              <Select
                {...register("Marital_Status", { required: true })}
                error={!!errors?.Marital}
                className='changed'
               onChange={selectMarital}
                labelId="Marital"
                id="Marital"
                label="Marital"
                sx={{ width: "200px" }}
                value={marit}
              >


                {Marital.map((elem, index) => {
                  return <MenuItem key={index} value={elem.value}>{elem.text}</MenuItem>
                })}
              </Select>
              <FormHelperText style={{ color: "red" }}>{errors?.Marital?.message}</FormHelperText>
            </FormControl>


          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={3} xl={3} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel id="Blood" style={{ marginRight: "20px" }}>Blood Group</InputLabel>
            <FormControl >
              <InputLabel id="demo-simple-select-label">Group</InputLabel>
              <Select
                {...register("Blood_Group", { required: true })}
                error={!!errors?.Blood}
                className='changed'
               onChange={selectBlood}
                labelId="Blood"
                id="Blood"
                label="Blood"
                sx={{ width: "130px" }}
                value={blood}
              >


                {Blood_Group.map((elem, index) => {
                  return <MenuItem key={index} value={elem.value}>{elem.text}</MenuItem>
                })}
              </Select>
              <FormHelperText style={{ color: "red" }}>{errors?.Blood?.message}</FormHelperText>
            </FormControl>


          </Grid>


          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} style={{ display: "flex", alignItems: "center" }}>
            <InputLabel htmlFor="Nationality" style={{ marginRight: "20px" }} >Nationality</InputLabel>
            <TextField sx={{ width: "200px" }}
              {...register("Nationality")}
              error={!!errors?.Nationality}
              onChange={Nation}
              value={nationality}
              helperText={errors?.Nationality?.message}
              aria-invalid={errors.Nationality ? "true" : "false"}
              id="Nationality"
              label="Enter Nationality"
               InputProps={{endAdornment:<IconButton onClick={close}>
                <CloseIcon/>
               </IconButton>}}
            />


</Grid> 
          <Grid  item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
            <div  style={{ marginTop: "50px" ,}}>
            <Button  color='error' variant='contained' sx={{marginRight:"10px"}} >cancel</Button>
              <Button color='success' variant='contained' type="submit" >submit</Button>
              
            </div>
          </Grid>
        </Grid>

      </form>
     


    </div>
  )
}
export default FormData;

