# frozen_string_literal: true

class User::Admin < User
  def roles
    %i[admin]
  end

  def admin?
    true
  end
end