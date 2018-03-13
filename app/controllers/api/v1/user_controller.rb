class API::V1::UserController < Devise::RegistrationsController
  def create
    result = UserService.build(posted_user)
    if result.include?(:errors)
      render json: result[:errors], status: 422
      return
    end
    render json: result[:user], status: 201
  end

  private

  def posted_user
    User.new(user_params)
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
