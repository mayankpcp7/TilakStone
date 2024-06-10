import React from 'react';

const ComparisonTable = () => {
  const features = [
    "Craftsmanship",
    "Material Quality",
    "Design Expertise",
    "Handling Operations",
    "Maintenance Guarantee",
    "Customer Service",
    "Investments",
    "Tools & Mobility",
    "Home Installation",
    "Multi-functionality",
    "Culture & Mythology",
    "Professional Certification",
    "Financial Cost/Care",
    "Community Involvement",
    "Antique Replicas",
    "Precision Stonecraft",
    "Customer Designs",
    "Greater Convenience",
    "Home/Space Improvement",
    "Intellectual Introduction",
    "Exquisite Crafts",
    "Details That Last",
    "K-Pot - Special Spaces",
    "Crafts of Legacy",
    "Cathedrals & Monasteries",
    "Promise and Harmony",
    "Customer - Driven"
  ];

  const tsaFeatures = [
    "25 years of trusted excellence",
    "Premium Australian marble",
    "Custom, modern marble designs",
    "Long-lasting performance",
    "Ongoing quality benchmarks",
    "End-to-end personalized service",
    "Unique designs and installations",
    "Equipped with modern tools",
    "Comprehensive installation",
    "Quality materials for home",
    "Culturally inspired designs",
    "Globally recognized",
    "Specialized stone technology",
    "Active community engagement",
    "Rare antique replicas",
    "State-of-the-art applications",
    "Guaranteed sourcing",
    "Protection & recovery",
    "Personalized quality",
    "Timeless designs",
    "Exquisite production",
    "Progressive designs",
    "Durability & detail",
    "Unique crafted designs",
    "Professional harmony",
    "Customer-driven"
  ];

  const localVendorFeatures = [
    "Vandalism-prone",
    "Limited material usage",
    "Limited, impractical designs",
    "Inconsistent quality",
    "Major craftsmanship risk",
    "Fragmented services",
    "Generic home designs",
    "Obsolete tools",
    "One-day installation",
    "Basic home materials",
    "Limited design insight",
    "Locally limited categories",
    "Inadequate resources",
    "Minimalist designs",
    "Private community work",
    "No known knowledge",
    "Play key",
    "Limited assurance",
    "Unsubstantiated",
    "Limited craftsmanship",
    "Same-type designs",
    "Inferior equipment",
    "Non-specialized",
    "Low production",
    "Basic level craft",
    "Resource-limited",
    "Minimal assurance"
  ];

  return (
    <div className="p-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Feature</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Tilak Stone Arts (TSA)</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Local Vendors</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{feature}</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{tsaFeatures[index]}</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{localVendorFeatures[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
