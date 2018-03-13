require 'rails_helper'

describe UserService do
  subject(:service) { described_class }
  describe 'build' do
    subject(:build) { service.build(user) }
    let(:user) { User.new }
    let(:error_hash) do
      OpenStruct.new(
        messages: {
          password: 'cannot be blank',
          email: 'cannot be blank'
        }
      )
    end

    before do
      allow(user).to receive(:save)
      allow(user).to receive(:errors).and_return(error_hash)
      allow(user).to receive(:valid?).and_return(validity)
      build
    end

    context 'user is valid' do
      let(:validity) { true }

      it { is_expected.to eq({ user: user }) }
      it { expect(user).to have_received(:save) }
    end

    context 'user is invalid' do
      let(:validity) { false }

      it { is_expected.to eq({ errors: error_hash.messages }) }
      it { expect(user).not_to have_received(:save) }
    end
  end
end
