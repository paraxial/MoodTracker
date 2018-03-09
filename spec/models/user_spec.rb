require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { described_class.new }

  describe 'validations' do
    it { expect(user).to validate_presence_of(:email) }
    it { expect(user).to validate_presence_of(:password) }
  end
end
