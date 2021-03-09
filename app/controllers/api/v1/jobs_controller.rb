class Api::V1::JobsController < ApplicationController

  def index
    jobs = current_user.job.with_date_period(params[:date])
    render json: { job: jobs }, status: 201
  end

  def create
    job = Job.new(job_params)

    if job.save
      render json: { job: job }, status: 201
    else
      render json: job.errors, status: 422
    end
  end

  def update
    job = Job.find(params[:id])
    job.update(job_params)

    render json: { job: job }, status: 201
  end

  def show
    job = Job.find(params[:id])

    render json: { job: job }, status: 201 if job.present?
  end

  def destroy
    job = Job.find(params[:id])

    render json: { id: job.id }, status: 202 if job.destroy
  end

  private

  def job_params
    params.require(:job).permit(
      :name,
      :category,
      :hours,
      :user_id
    )
  end
end