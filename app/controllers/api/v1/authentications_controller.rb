class Api::V1::AuthenticationsController < ApplicationController
  skip_before_action :authenticate_user, only: :create

  def create
    user = User.find_by(email: params[:email])

    if user&.authenticate(params[:password])
      generate_token(user)
      cookies.signed[:jwt] = {
        value: generate_token(user),
        httponly: true,
        expires: 2.hours.from_now
      }
      render json: UserSerializer.new(user), status: 201
    else
      render json: { errors: 'Email or password incorrect' }, status: 404
    end
  end

  def destroy
    cookies.delete(:jwt)
    render json: {}, status: 200
  end

  def show
    render json: UserSerializer.new(current_user), status: 200
  end

  private

  def generate_token(user)
    JsonWebToken.encode(user_id: user.id)
  end
end