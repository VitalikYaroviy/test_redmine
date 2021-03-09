class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :second_name, :created_at, :email

  attributes :isAdmin do |object|
    object.admin?
  end
end