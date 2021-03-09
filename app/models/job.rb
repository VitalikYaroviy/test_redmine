class Job < ApplicationRecord
  validates :name, :category, :hours, presence: true

  belongs_to :user

  enum name: [:colafizz, :twiine, :rest]
  enum category: [:development, :investigation, :meeting, :ps4]
end
