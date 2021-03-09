class Job < ApplicationRecord
  validates :name, :category, :hours, presence: true

  belongs_to :user

  scope :with_date_period, ->(date) { where(
    created_at: Time.parse(date).beginning_of_day..Time.parse(date).end_of_day
  )}

  enum name: [:colafizz, :twiine, :rest]
  enum category: [:development, :investigation, :meeting, :ps4]
end
