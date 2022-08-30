using DB_ManagementApplication.Data;
using DB_ManagementApplication.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;



namespace DB_ManagementApplication.Controllers
{

    [ApiController]
    [Route("[controller]")]
   
    public class MotionPicturesController : ControllerBase
    {
        private readonly DataContext _context;

        public MotionPicturesController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
     


        public async Task<int> Create(MotionPicture item)
        {
            _context.MotionPictures.Add(item);
            await _context.SaveChangesAsync();

            return item.Id;
        }

        [HttpGet]
    


        public async Task<IEnumerable<MotionPicture>> Get()
        {
            var items = await _context.MotionPictures.ToListAsync();

            return items;
        }

        [HttpGet("{id}")]
     


        public async Task<MotionPicture> Get(int id)
        {
            var item = await _context.MotionPictures.FirstOrDefaultAsync(item => item.Id == id);

            return item;
        }

        [HttpPut("{id}")]
 


        public async Task<bool> Update(int id, MotionPicture item)
        {
            var existingItem = await _context.MotionPictures.FirstOrDefaultAsync(i => i.Id == id);
            existingItem.Name = item.Name;
            existingItem.Description = item.Description;
            existingItem.ReleaseYear = item.ReleaseYear;
            var result = await _context.SaveChangesAsync();

            return result > 0;
        }

        [HttpDelete("{id}")]
     

        public async Task<bool> Delete(int id)
        {
            var item = await _context.MotionPictures.FirstOrDefaultAsync(item => item.Id == id);
            _context.MotionPictures.Remove(item);
            var result = await _context.SaveChangesAsync();

            return result > 0;
        }
    }
}
