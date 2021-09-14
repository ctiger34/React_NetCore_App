using System;

namespace Domain
{
    public class Review
    {
        public int Id { get; set; }
        public Guid BookId {get; set;}
        public string BookName { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Content { get; set; }
        public int? Stars { get; set; }
    }
}