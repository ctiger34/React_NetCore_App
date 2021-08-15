using System;

namespace Domain
{
    public class Comment
    {
        public int Id { get; set; }
        public Guid BookId {get; set;}
        public string UserName { get; set; }
        public string Content { get; set; }
        public DateTime Time { get; set; }  
    }
}