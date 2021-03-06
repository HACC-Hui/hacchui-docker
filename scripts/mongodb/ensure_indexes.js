/* Template for HACC-Hui. Must be edited. */

var conn = new Mongo();
var db = conn.getDB("radgrad");

/* BoxOwners */
// var box_owners = db.BoxOwners;
// box_owners.createIndex({"username": 1});
// box_owners.createIndex({"box_id": 1}, {"unique": true});

/* UserProfiles */
// var user_profiles = db.UserProfiles;
// user_profiles.createIndex({username: 1});
// user_profiles.createIndex({role: 1});

/* cronHistory */
// var cron_history = db.cronHistory;
// cron_history.createIndex({intendedAt: 1});
// cron_history.createIndex({startedAt: 1});
// cron_history.createIndex({finishedAt: 1});
// cron_history.createIndex({name: 1});

/* events */
// var events = db.events;
// events.createIndex({"event_id": 1}, {"unique": true});
// events.createIndex({"target_event_start_timestamp_ms": 1});

/* ground truth */
// var ground_truth = db.ground_truth;
// ground_truth.createIndex({"meter-name": 1});
// ground_truth.createIndex({"sample-type": 1});
// ground_truth.createIndex({"ts-s": 1});
// ground_truth.createIndex({"ts-s": 1}, {"meter-name": 1});
// ground_truth.createIndex({"ts-s": 1}, {"sample-type": 1});
// ground_truth.createIndex({"ts-s": 1}, {"sample-type": 1}, {"meter-name": 1});

/* health */
// var health = db.health;
// health.createIndex({"timestamp": 1});
// health.createIndex({"service": 1});
// health.createIndex({"service": 1}, {"timestamp": 1});

/* incidents */
// var incidents = db.incidents;
// incidents.createIndex({"incident_id": 1}, {"unique": true});
// incidents.createIndex({"start_timestamp_ms": 1});
// incidents.createIndex({"event_id": 1});
// incidents.createIndex({"classifications": 1});

/* locations */
// var locations = db.locations;
// locations.createIndex({"slug": 1}, {"unique": 1});
// locations.createIndex({"description": 1}, {"unique": 1});
// locations.createIndex({"coordinates": "2d"});

