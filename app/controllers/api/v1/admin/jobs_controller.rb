class Api::V1::Admin::JobsController < ApplicationController

  def index
    jobs = Job.where(
      created_at: Time.parse(params[:date]).beginning_of_day..Time.parse(params[:date]).end_of_day
    )
    filters_jobs = jobs.where(filters_params)
    render json: { job: filters_jobs }, status: 201
  end

  private

  def filters_params
    params.permit(:name, :category, :user_id)
  end
end