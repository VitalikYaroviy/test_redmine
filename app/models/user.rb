class User < ApplicationRecord
  has_secure_password

  # validates :password, length: { minimum: 6 }, allow_nil: false
  # validates_presence_of :password_confirmation

  has_many :job

  def admin?
    false
  end
end
