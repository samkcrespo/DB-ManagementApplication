using DB_ManagementApplication.Models;
using Microsoft.EntityFrameworkCore;

namespace DB_ManagementApplication.Data
{
    public class DataContext : DbContext
    {
       
            public DataContext(DbContextOptions<DataContext> options) : base(options)
            {

            }
            public DbSet<MotionPicture> MotionPictures { get; set; }

        }
    }

