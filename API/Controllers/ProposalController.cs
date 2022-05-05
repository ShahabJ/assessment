using System;
using Microsoft.AspNetCore.Mvc;
using API.Data;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProposalController : ControllerBase
    {
        // private readonly ILogger<ProposalController> _logger;
        private readonly DataContext _dataContext;

        public ProposalController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet]
        public IActionResult GetData()
        {
            try
            {
                var proposals = _dataContext.Proposal.Include(p => p.Facilities);
                return Ok(proposals);
            }
            catch (Exception)
            {
                //log error
                return Problem("Something went wrong.");
            }
        }
    }
}
