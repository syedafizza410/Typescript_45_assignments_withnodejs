function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
describe_city("New York", "America");
