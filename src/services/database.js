import { MongoClient } from 'mongodb';
import { CONFIG } from '../config.js';

let client;
let db;

export const connectDB = async () => {
  try {
    client = new MongoClient(CONFIG.MONGODB_URI);
    await client.connect();
    db = client.db('inconnu_boy_sensei');
    console.log('Connected to MongoDB');
    return db;
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
};

export const getDB = () => {
  if (!db) throw new Error('Database not initialized');
  return db;
};

export const trackUserAction = async (action, data = {}) => {
  try {
    const db = getDB();
    const collection = db.collection('user_actions');
    await collection.insertOne({
      action,
      ...data,
      timestamp: new Date(),
      userAgent: navigator.userAgent
    });
  } catch (error) {
    console.error('Error tracking user action:', error);
  }
};

export const getAnalytics = async () => {
  try {
    const db = getDB();
    const collection = db.collection('user_actions');
    
    const totalVisits = await collection.countDocuments();
    const uniqueVisitors = await collection.distinct('userAgent');
    const popularActions = await collection.aggregate([
      { $group: { _id: '$action', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]).toArray();

    return {
      totalVisits,
      uniqueVisitors: uniqueVisitors.length,
      popularActions
    };
  } catch (error) {
    console.error('Error getting analytics:', error);
    return null;
  }
};
