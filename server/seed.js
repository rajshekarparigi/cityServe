
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Complaint = require('./models/Complaint');
dotenv.config();

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected for seeding');

    // Clear existing data
    await User.deleteMany({});
    await Complaint.deleteMany({});

    console.log('🗑️  Cleared existing data');

    // Create users
    const hashedPassword = await bcrypt.hash('password123', 10);

    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@cityserve.com',
      password: 'admin123',
      role: 'admin',
      phone: '+1 (555) 100-0001'
    });

    const admin1 = await User.create({
      name: 'Rajshekar',
      email: 'admin1@cityserve.com',
      password: 'admin1234',
      role: 'admin',
      phone: '+1 (555) 100-0001'
    });

    const citizen1 = await User.create({
      name: 'John Doe',
      email: 'user@cityserve.com',
      password: 'user123',
      role: 'citizen',
      phone: '+1 (555) 100-0002'
    });

    const citizen2 = await User.create({
      name: 'Jane Smith',
      email: 'jane@cityserve.com',
      password: 'password123',
      role: 'citizen',
      phone: '+1 (555) 100-0003'
    });

    console.log('✅ Users created');

    // Create sample complaints (Hyderabad coordinates)
    const complaints = [
      {
        title: 'Large pothole on Main Road',
        description: 'There is a dangerous pothole near the traffic signal that needs immediate attention. It has been causing accidents.',
        category: 'pothole',
        status: 'pending',
        priority: 'high',
        location: {
          type: 'Point',
          coordinates: [78.4867, 17.3850],
          address: 'Main Road, Banjara Hills, Hyderabad'
        },
        user: citizen1._id
      },
      {
        title: 'Waste accumulation near park',
        description: 'Garbage has been accumulating near the public park for over a week. It is creating a health hazard.',
        category: 'waste',
        status: 'in-progress',
        priority: 'high',
        location: {
          type: 'Point',
          coordinates: [78.4744, 17.4239],
          address: 'Jubilee Hills, Hyderabad'
        },
        user: citizen2._id,
        adminNotes: 'Cleanup crew assigned, work in progress'
      },
      {
        title: 'Street light not working',
        description: 'The street light on our street has not been working for 2 weeks, making it unsafe at night.',
        category: 'streetlight',
        status: 'resolved',
        priority: 'medium',
        location: {
          type: 'Point',
          coordinates: [78.4983, 17.3616],
          address: 'Kondapur, Hyderabad'
        },
        user: citizen1._id,
        adminNotes: 'Light bulb replaced on 10/20/2024',
        resolvedAt: new Date('2024-10-20')
      },
      {
        title: 'Water leakage from main pipe',
        description: 'Continuous water leakage from the main water supply pipe causing water wastage.',
        category: 'water',
        status: 'pending',
        priority: 'high',
        location: {
          type: 'Point',
          coordinates: [78.4563, 17.4126],
          address: 'Madhapur, Hyderabad'
        },
        user: citizen2._id
      },
      {
        title: 'Blocked drainage system',
        description: 'The drainage system is completely blocked, causing water logging during rain.',
        category: 'drainage',
        status: 'in-progress',
        priority: 'medium',
        location: {
          type: 'Point',
          coordinates: [78.4089, 17.4399],
          address: 'Gachibowli, Hyderabad'
        },
        user: citizen1._id,
        adminNotes: 'Drainage cleaning team dispatched'
      },
      {
        title: 'Broken footpath tiles',
        description: 'Multiple footpath tiles are broken making it difficult for pedestrians.',
        category: 'other',
        status: 'rejected',
        priority: 'low',
        location: {
          type: 'Point',
          coordinates: [78.4482, 17.4065],
          address: 'HITEC City, Hyderabad'
        },
        user: citizen2._id,
        adminNotes: 'This falls under private property maintenance'
      },
      {
        title: 'Garbage bin overflowing',
        description: 'The public garbage bin at the corner has been overflowing for days.',
        category: 'waste',
        status: 'pending',
        priority: 'medium',
        location: {
          type: 'Point',
          coordinates: [78.5118, 17.4435],
          address: 'Miyapur, Hyderabad'
        },
        user: citizen1._id
      },
      {
        title: 'Pothole causing traffic issues',
        description: 'Large pothole in the middle of the road causing traffic congestion.',
        category: 'pothole',
        status: 'resolved',
        priority: 'high',
        location: {
          type: 'Point',
          coordinates: [78.3808, 17.4333],
          address: 'Chandanagar, Hyderabad'
        },
        user: citizen2._id,
        adminNotes: 'Pothole filled on 10/22/2024',
        resolvedAt: new Date('2024-10-22')
      }
    ];

    await Complaint.insertMany(complaints);
    console.log('✅ Complaints created');

    console.log('\n🎉 Database seeded successfully!');
    console.log('\n📧 Login Credentials:');
    console.log('Admin: admin@cityserve.com / admin123');
    console.log('User 1: user@cityserve.com / user123');
    console.log('User 2: jane@cityserve.com / password123');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();