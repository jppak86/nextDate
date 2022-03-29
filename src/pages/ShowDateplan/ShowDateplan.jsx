import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as datePlanService from '../../services/datePlan.js'
import { Link } from "react-router-dom";




const ShowDateplan = ({datePlans, datePlan, handleDeleteDatePlan, ownerId, profiles, user, proIdx, findProfileIndex}) => {
  const [datePlanDetail, setDatePlanDetail] = useState({})
  const { id } = useParams()

  
  
  
  useEffect(()=> {
    datePlanService.getDatePlanDetails(id)
    .then(datePlanDetails => setDatePlanDetail(datePlanDetails))
  },[])
  
  console.log(datePlanDetail.owner?.email)
  console.log(user.email)
  
  
  return ( 
    <>
      <div>
        <h1>{datePlanDetail.title}</h1>
        <h3>{datePlanDetail.location}</h3>
        <p>{datePlanDetail.detail}</p>
        <p>{datePlanDetail.food}</p>
        <p>{datePlanDetail.activity}</p>
        {datePlanDetail.owner?.email === user.email ? 
          <Link to="/edit" state={{ datePlanDetail }}>
            Edit Date Plan
          </Link> 
          : ''
      }
      
      </div>
      
       
    </>
  );
}
 
export default ShowDateplan;