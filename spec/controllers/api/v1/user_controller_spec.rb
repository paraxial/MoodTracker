require 'rails_helper'

describe API::V1::UserController do
  describe 'POST create' do
    let(:perform_action) { post :create, params: user_params }
    let(:user_object) { FactoryBot.attributes_for(:user) }
    let(:user_params) do
      {
        format: 'json',
        user: user_object
      }
    end
    let(:parsed_response) { JSON.parse(response.body).symbolize_keys! }

    before(:each) do
      request.env['devise.mapping'] = Devise.mappings[:user]
      allow(UserService).to receive(:build).and_return(service_response)
      perform_action
    end

    context 'the service successfully creates the user' do
      let(:service_response) { { user: user_object } }

      context 'with correct params passed' do
        it { expect(response.status).to eq(201)}
        it { expect(parsed_response).to include(user_object.slice(:email)) }
      end
    end

    context 'the service could not create the user' do
      context 'because the user object was invalid' do
        let(:service_response) { { errors: { email: 'is not unique' } } }

        it { expect(response.status).to eq(422)}
        it { expect(parsed_response).to eq(service_response[:errors]) }
      end
    end
  end
end
