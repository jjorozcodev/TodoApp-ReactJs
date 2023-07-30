using System;
using System.Collections.Generic;

namespace TodoApp.Model;

public partial class Task
{
    public int Id { get; set; }

    public string Description { get; set; } = null!;

    public DateTime CreationDate { get; set; }
}
