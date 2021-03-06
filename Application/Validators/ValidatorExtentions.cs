using FluentValidation;

namespace Application.Validators
{
    public static class ValidatorExtentions
    {
        public static IRuleBuilder<T, string> Password<T>(this IRuleBuilder<T, string> ruleBuilder)
        {
            var options = ruleBuilder
            .NotEmpty()
            .MinimumLength(6).WithMessage("Password must be at least 6 long characters")
            .Matches("[A-Z]").WithMessage("Password must have at least 1 upper case letter")
            .Matches("[a-z]").WithMessage("Password must have at least 1 lower case letter")
            .Matches("[0-9]").WithMessage("Password must have at least one Number")
            .Matches("[^a-zA-Z0-9]").WithMessage("Password must have at least one character");

            return options;
        }
    }
}