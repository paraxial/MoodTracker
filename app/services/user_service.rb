  class UserService
    def self.build(user)
      if user.valid?
        user.save
        return user
      end

      user.errors.messages
    end
  end
