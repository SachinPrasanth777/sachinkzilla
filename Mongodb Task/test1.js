const { testrun, testcloserun } = require("./test");
const prompt = require('prompt-sync')();

async function tryentry(name, phone) {
  try {
    const db = await testrun();
    const ul = db.collection("kzillatest");
    const data = await ul.insertOne({ "name": name, "phone": phone });
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    await testcloserun();
  }
}

async function read() {
  try {
    const db = await testrun();
    const ul = db.collection("kzillatest");
    const data = await ul.find().toArray();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    await testcloserun();
  }
}

async function update(name, phone) {
  try {
    const db = await testrun();
    const ul = db.collection("kzillatest");
    const data = await ul.updateOne({ "name": name }, { $set: { "phone": phone } });
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    await testcloserun();
  }
}

async function del(name, phone) {
  try {
    const db = await testrun();
    const ul = db.collection("kzillatest");
    const data = await ul.deleteOne({ "name": name, "phone": phone });
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    await testcloserun();
  }
}

async function run() {
  var name, phone; 
  try {
    console.log("Choose an operation:");
    console.log("1. Insert data");
    console.log("2. Read data");
    console.log("3. Update data");
    console.log("4. Delete data");
    const choice = prompt("Enter the operation number: ");
    switch (choice) {
      case "1":
        name = prompt("Enter name: ");
        phone = prompt("Enter phone: ");
        console.log("Inserting data:");
        await tryentry(name, phone);
        break;
      case "2":
        await read();
        break;
      case "3":
        name = prompt("Enter name: ");
        phone = prompt("Enter phone: ");
        console.log("Updating data:");
        await update(name, phone);
        break;
      case "4":
        name = prompt("Enter name: ");
        phone = prompt("Enter phone: ");
        console.log("Deleting data:");
        await del(name, phone);
        break;
      default:
        console.log("Invalid choice. Please choose a valid operation.");
    }
  } catch (error) {
    console.log(error);
  } 
  }
run();