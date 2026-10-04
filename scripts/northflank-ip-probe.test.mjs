import { test } from "node:test";
import assert from "node:assert/strict";
import { fingerprint, record, install, probeMarker } from "./northflank-ip-probe.mjs";
test("fingerprints normalize mapped IPv4 and never include raw addresses",()=>{
 assert.equal(fingerprint("::ffff:192.0.2.1"),fingerprint("192.0.2.1"));
 assert.notEqual(fingerprint("192.0.2.1"),fingerprint("192.0.2.2"));
 assert.equal(fingerprint("invalid"),null);
});
test("records only validated IP fingerprints and test marker positions",()=>{
 const value=record({url:"/api/health",headers:{"x-nf-ip-probe":"nfprobe-test","x-forwarded-for":"198.51.100.10, 192.0.2.1","x-real-ip":"203.0.113.20",authorization:"secret"},socket:{remoteAddress:"10.0.0.1"}});
 assert.deepEqual(value.markers,[0,-1]); assert.equal(value.forwarded.length,2);
 const serialized=JSON.stringify(value);for(const raw of ["192.0.2.1","198.51.100.10","10.0.0.1","secret"])assert.ok(!serialized.includes(raw));
});
test("refuses to install outside maintenance diagnostic mode",()=>{assert.throws(()=>install());});
 test("mobile marker only accepts the health path",()=>{
 assert.equal(probeMarker({url:"/api/health?nfprobe=nfprobe-mobile",headers:{}}),"nfprobe-mobile");
 assert.equal(probeMarker({url:"/api/trpc?nfprobe=nfprobe-mobile",headers:{}}),null);
 assert.equal(probeMarker({url:"http://[invalid",headers:{}}),null);
 });
