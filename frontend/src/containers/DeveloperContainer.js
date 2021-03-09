import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { isEmpty } from 'lodash'

import { Developer } from '../components'
import { sessionDeleteRequest, getUsersRequest } from '../store/sessions/actions'
import {
  getJobsRequest,
  jobCreateRequest,
  jobDeleteRequest,
  getFiltersJobsRequest,
  getJobRequest,
  jobUpdateRequest
} from '../store/jobs/actions'

export const DeveloperContainer = () => {
  const dispatch = useDispatch()

  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedEditProject, setSelectedEditProject] = useState(null)
  const [selectedEditCategory, setSelectedEditCategory] = useState(null)
  const [valueEdit, setValueEdit] = useState('')
  const [value, setValue] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [open, setModalOpen] = useState(false)
  const [flag, setFlag] = useState(false)
  const [usersArray, setUsersArray] = useState([])

  const { data, users } = useSelector(state => state.sessions)
  const { jobsData, job } = useSelector(state => state.jobs)

  useEffect(() => {
    if (data.attributes.isAdmin) dispatch(getUsersRequest('users'))
  }, [data])
    
  useEffect(() => {
    if (users.length) {
      const usersData =  [];
      users.map(item => {
        usersData.push({ value: item.name.toLowerCase(), label: item.name })
      })
      setUsersArray(usersData)
    }
  }, [users])

  useEffect (() => {
    if (data.attributes.isAdmin && !open) {
      const date = new moment.utc(startDate).format('YYYY-MM-DD HH:mm:ss Z')
      let url = `admin/jobs?date=${date}`
      if (selectedProject && selectedProject.value.length ) {
        url += `&name=${selectedProject.value}`
      }
      if (selectedCategory && selectedCategory.value.length) {
        url += `&category=${selectedCategory.value}`
      }
      if (selectedUser && selectedUser.value.length) {
        users.map(i => {
          if (i.name === selectedUser.label) {
            url += `&user_id=${i.id}`
          }
        })
      }
  
      dispatch(getFiltersJobsRequest(url))
    }
  }, [data, startDate, selectedProject, selectedCategory, selectedUser]);


  useEffect(() => {
    if (!data.attributes.isAdmin) {
      dispatch(getJobsRequest(`jobs?date=${moment(startDate).format('DD-MM-YYYY hh:mm:ss')}`))
    }
  }, [startDate])

  const logOut = () => {
    dispatch(sessionDeleteRequest('authentications'))
  }

  const handleChange = (e) => {
    if (!open) {
      const text = (e.target.validity.valid) ? e.target.value : value
      setValue(text)
    } else {
      !flag && setFlag(true)
      const editText = (e.target.validity.valid) ? e.target.value : valueEdit
      setValueEdit(editText)
    }
  }

  const create = () => {
    const sendData = { name: selectedProject.value, category: selectedCategory.value, hours: value, user_id: data.id }
    dispatch(jobCreateRequest('jobs', sendData))
    setSelectedProject(null)
    setSelectedCategory(null)
    setValue('')
  }

  const remove = id => {
    dispatch(jobDeleteRequest(`jobs/${id}`))
  }

  const getJob = (id) => {
    setModalOpen(true)
    dispatch(getJobRequest(`jobs/${id}`))
  }

  const updateJob = () => {
    const data = {}
    if (selectedEditProject) data.name = selectedEditProject.value
    if (selectedEditCategory) data.category = selectedEditCategory.value
    if (valueEdit) data.hours = valueEdit
    !isEmpty(data) && dispatch(jobUpdateRequest(`jobs/${job.id}`, data))
    setModalOpen(false)
  }

  return (
    <Developer
      logOut={ logOut }
      user={ data.attributes }
      selectedProject={ selectedProject }
      setSelectedProject={ setSelectedProject }
      selectedCategory={ selectedCategory }
      setSelectedCategory={ setSelectedCategory }
      setValue={ setValue }
      value={ value }
      handleChange={ handleChange }
      create={ create }
      jobsData={ jobsData }
      remove={ remove }
      startDate={ startDate }
      setStartDate={ setStartDate }
      usersArray={ usersArray }
      selectedUser={ selectedUser }
      setSelectedUser={ setSelectedUser }
      users={ users }
      getJob={ getJob }
      open={ open }
      setModalOpen={ setModalOpen }
      job={ job }
      flag={ flag }
      updateJob={ updateJob }
      selectedEditProject={ selectedEditProject }
      setSelectedEditProject={ setSelectedEditProject }
      selectedEditCategory={ selectedEditCategory }
      setSelectedEditCategory={ setSelectedEditCategory }
      valueEdit={ valueEdit }
    />
  )
}
