class Api::V1::Admin::JobsController < ApplicationController

  def index
    jobs = Job.with_date_period(params[:date])

    filters_jobs = jobs.where(filters_params)
    render json: { job: filters_jobs }, status: 201
  end

  private

  def filters_params
    params.permit(:name, :category, :user_id)
  end
end