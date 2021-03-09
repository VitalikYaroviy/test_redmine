import React, { forwardRef } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import { isEmpty } from 'lodash'

import './styles.scss'
import { ArrowBackIcon, CalendarIcon, CencelIcon, NextArrowIcon } from '../assets/svg';

const projects = [
  { value: 'colafizz', label: 'Colafizz' },
  { value: 'rest', label: 'Rest' },
  { value: 'twiine', label: 'Twine' },
];

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'investigation', label: 'Investigation' },
  { value: 'meeting', label: 'StandUp Meeting' },
  { value: 'ps4', label: 'PS4' },
];

export const Developer = ({
  logOut,
  user,
  selectedProject,
  setSelectedProject,
  selectedCategory,
  setSelectedCategory,
  value,
  handleChange,
  create,
  jobsData,
  remove,
  startDate,
  setStartDate,
  usersArray,
  selectedUser,
  setSelectedUser,
  users,
  getJob,
  open,
  setModalOpen,
  job,
  flag,
  updateJob,
  selectedEditProject,
  setSelectedEditProject,
  selectedEditCategory,
  setSelectedEditCategory,
  valueEdit
}) => {

  const ExampleCustomInput = forwardRef(
    ({ value, onClick }, ref) => (
      <div onClick={ onClick } ref={ ref } className='custom-input'>
        <CalendarIcon/>
      </div>
    ),
  );

  return (
    <div>
      <div className='header'>
        <div>{ user.name } { user.second_name }</div>
        <button onClick={ () => logOut() }>Log out</button>
      </div>
      {
        !user.isAdmin ? (
          <div className='select-block'>
            <Select
              value={ selectedProject }
              onChange={ (opt) => setSelectedProject(opt) }
              options={ projects }
              className='users-select'
              placeholder='Project'
            />
            <Select
              value={ selectedCategory }
              onChange={ (opt) => setSelectedCategory(opt) }
              options={ categories }
              className='users-select'
              placeholder='Category'
            />
            <input
              placeholder='Hours'
              type='text'
              pattern='[0-9]*'
              onInput={ (e) => handleChange(e) }
              value={ value }
            />
            <button onClick={ () => create() }>
              Save
            </button>
          </div>
        ) : (
          <div className='admin-block'>
            <div className='filter-title'>Filters:</div>
            <div className='select-block'>
              <div className='admins-selects'>
                <Select
                  value={ selectedUser }
                  onChange={ (opt) => setSelectedUser(opt) }
                  options={ usersArray }
                  className='select'
                  placeholder='User'
                />
                <div onClick={ () => setSelectedUser(null) } className='close-icon'>
                  <CencelIcon/>
                </div>
              </div>
              <div className='admins-selects'>
                <Select
                  value={ selectedProject }
                  onChange={ (opt) => setSelectedProject(opt) }
                  options={ projects }
                  className='select'
                  placeholder='Project'
                />
                <div onClick={ () => setSelectedProject(null) } className='close-icon'>
                  <CencelIcon/>
                </div>
              </div>
              <div className='admins-selects'>
                <Select
                  value={ selectedCategory }
                  onChange={ (opt) => setSelectedCategory(opt) }
                  options={ categories }
                  className='select'
                  placeholder='Category'
                />
                <div onClick={ () => setSelectedCategory(null) } className='close-icon'>
                  <CencelIcon/>
                </div>
              </div>
            </div>
          </div>
        )
      }
      <div className='date-picker'>
        <button
          onClick={ () => setStartDate(new moment(startDate).subtract(1, 'days').toDate()) }
          className='date-picker-button'
        >
          <ArrowBackIcon />
        </button>
        { moment(startDate).format('LL') }
        <DatePicker
          selected={ startDate }
          onChange={ date => setStartDate(date) }
          customInput={ <ExampleCustomInput /> }
        />
        <button
          onClick={ () => setStartDate(new moment(startDate).add(1, 'days').toDate()) }
          className='date-picker-button'
        >
          <NextArrowIcon/>
        </button>
      </div>
      <div className='data-block'>
        <div className='data-header'>
          { user.isAdmin && <div className='data-item'>User</div> }
          <div className='data-item'>Project</div>
          <div className='data-item'>Category</div>
          <div className='data-item'>Hours</div>
          <div className='data-item'>Actions</div>
        </div>
        {
          jobsData.length > 0 && jobsData.map( item => (
            <div className='data-body' key={ item.id }>
              { user.isAdmin && users.map(i => {
                if (i.id === item.user_id) {
                  return <div className='data-item'>{ i.name  }</div>
                } 
              })
              }
              <div className='data-item'>{ item.name.charAt(0).toUpperCase() + item.name.slice(1) }</div>
              <div className='data-item'>{ item.category.charAt(0).toUpperCase() + item.category.slice(1) }</div>
              <div className='data-item'>{ item.hours }</div>
              <div className='data-item'>
                <button onClick={ () => getJob(item.id) } >Edit</button>
                <button onClick={ () => remove(item.id) } >Delete</button>
              </div>
            </div>
          ))
        }
        <div className='total'>
          Total: { jobsData.reduce(function(prev, cur) { return prev + cur.hours }, 0) }
        </div>
      </div>
      {
        !isEmpty(job) && (
          <Modal
            open={open}
            onClose={() => setModalOpen(false)}
            center
            classNames={{
              modal: 'customModal',
            }}
          >
            <h2>Edit</h2>
            <div className='modal-selects-block'>
              <Select
                value={
                  selectedEditProject || {
                    value: job.name,
                    label: job.name.charAt(0).toUpperCase() + job.name.slice(1)
                }}
                onChange={ (opt) => setSelectedEditProject(opt) }
                options={ projects }
                className='modal-select'
                placeholder='Project'
              />
              <Select
                value={ selectedEditCategory || {
                  value: job.category,
                  label: job.category.charAt(0).toUpperCase() + job.category.slice(1)
                }}
                onChange={ (opt) => setSelectedEditCategory(opt) }
                options={ categories }
                className='modal-select'
                placeholder='Category'
              />
              <input
                placeholder='Hours'
                type="text"
                pattern="[0-9]*"
                onInput={ (e) => handleChange(e) }
                value={ flag ? valueEdit : job.hours }
              />
            </div>
            <div className='save-button-block'>
              <button
                className='save-button'
                onClick={ () => updateJob() }
              >
                Save
              </button>
            </div>
          </Modal>
        )
      }
    </div>
  )
}
