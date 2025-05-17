
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Upload, Check, AlertCircle } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  documentType: string;
  details: string;
};

const documentTypes = [
  { id: "contract", name: "Contract" },
  { id: "agreement", name: "Legal Agreement" },
  { id: "lease", name: "Lease Agreement" },
  { id: "will", name: "Will or Testament" },
  { id: "power-of-attorney", name: "Power of Attorney" },
  { id: "incorporation", name: "Certificate of Incorporation" },
  { id: "other", name: "Other Legal Document" },
];

const DocumentReview = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      documentType: "",
      details: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadStatus("idle");
      const newFiles = Array.from(e.target.files);
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  const handleUpload = () => {
    if (uploadedFiles.length === 0) {
      toast.error("Please select at least one file to upload");
      return;
    }

    setUploading(true);
    setUploadStatus("uploading");

    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      setUploadStatus("success");
      toast.success("Files uploaded successfully");
    }, 2000);
  };

  const removeFile = (index: number) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

  const onSubmit = (data: FormValues) => {
    if (uploadedFiles.length === 0) {
      toast.error("Please upload at least one document for review");
      return;
    }

    console.log("Form submitted:", data);
    console.log("Files:", uploadedFiles);

    toast.success("Your document review request has been submitted successfully!");
    
    // In a real application, this would send data to a backend
    setTimeout(() => {
      setUploadedFiles([]);
      form.reset();
      setUploadStatus("idle");
    }, 2000);
  };

  const getUploadStatusIcon = () => {
    switch (uploadStatus) {
      case "uploading":
        return <div className="animate-spin h-5 w-5 border-2 border-legal-navy border-t-transparent rounded-full"></div>;
      case "success":
        return <Check className="h-5 w-5 text-green-500" />;
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-legal-navy mb-6 text-center">Document Review Service</h1>
            <p className="text-lg text-legal-darkgray mb-8 text-center">
              Upload your legal documents and our experts will review them for accuracy, completeness, and compliance.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-legal-navy">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your full name" 
                              {...field}
                              className="border-gray-300 focus:border-legal-navy"
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium text-legal-navy">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="Enter your email address" 
                              {...field}
                              className="border-gray-300 focus:border-legal-navy"
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="documentType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-legal-navy">Document Type</FormLabel>
                        <FormControl>
                          <select 
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-legal-navy"
                            {...field}
                            required
                          >
                            <option value="">Select document type</option>
                            {documentTypes.map((type) => (
                              <option key={type.id} value={type.id}>{type.name}</option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Document Upload Section */}
                  <div className="space-y-4">
                    <div className="font-medium text-legal-navy">Upload Document(s)</div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <FileText className="h-12 w-12 text-legal-navy mx-auto mb-4" />
                      <p className="text-legal-darkgray mb-4">
                        Drag & drop files here, or click to select files
                      </p>
                      <Input 
                        type="file" 
                        id="file-upload"
                        multiple
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="file-upload">
                        <div className="bg-legal-navy hover:bg-opacity-90 text-white py-2 px-4 rounded-md inline-flex items-center cursor-pointer">
                          <Upload className="h-4 w-4 mr-2" />
                          Browse Files
                        </div>
                      </label>
                      <p className="text-sm text-gray-500 mt-2">
                        Supported formats: PDF, DOC, DOCX, TXT (Max size: 10MB per file)
                      </p>
                    </div>
                    
                    {/* File List */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-4">
                        <div className="font-medium text-legal-navy mb-2">Selected Files:</div>
                        <ul className="space-y-2">
                          {uploadedFiles.map((file, index) => (
                            <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                              <div className="flex items-center">
                                <FileText className="h-4 w-4 mr-2 text-legal-navy" />
                                <span className="text-sm truncate max-w-[200px] md:max-w-[300px]">{file.name}</span>
                                <span className="text-xs text-gray-500 ml-2">({(file.size / 1024).toFixed(1)} KB)</span>
                              </div>
                              <button 
                                type="button"
                                className="text-red-500 hover:text-red-700"
                                onClick={() => removeFile(index)}
                              >
                                Remove
                              </button>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex items-center gap-3">
                          <Button 
                            type="button" 
                            onClick={handleUpload}
                            disabled={uploading || uploadStatus === "success"}
                            className="bg-legal-navy hover:bg-opacity-90"
                          >
                            {uploadStatus === "uploading" ? "Uploading..." : "Confirm Upload"}
                          </Button>
                          {getUploadStatusIcon()}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-legal-navy">Additional Details</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide any additional information about your documents or specific concerns you would like our reviewers to address"
                            className="min-h-[120px] border-gray-300 focus:border-legal-navy"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          The more details you provide, the better we can assist with your document review.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="text-center pt-4">
                    <Button 
                      type="submit" 
                      className="bg-legal-navy hover:bg-opacity-90 text-white py-2 px-6 rounded-md text-lg w-full md:w-auto"
                      disabled={uploadStatus !== "success"}
                    >
                      Submit for Review
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocumentReview;
