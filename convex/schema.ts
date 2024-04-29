import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  plant: defineTable({
    name: v.string(),
    species: v.string(),
    birthday: v.number(),
    lastWatered: v.number(),
    lastFertilized: v.number(),
    lastRotated: v.number(),
    notes: v.string(),
    imageId: v.id('_storage'),
  }),
  plantCollection: defineTable({
    title: v.string(),
    members: v.array(v.id('user')),
  }).index('byMembers', ['members']),
  plantCollectionMember: defineTable({
    collectionId: v.id('plantCollection'),
    memberId: v.id('user'),
  }).index('by_collectionId_memberId', ['collectionId', 'memberId']),
});
