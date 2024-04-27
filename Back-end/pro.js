app.delete("/books/:id", async (request, response) => {
    try {
        const { id } = request.params;

        console.log("Deleting book with ID:", id);

        const result = await Book.findByIdAndDelete(id);
        
        if (!result) {
            console.log("Book not found with ID:", id);
            return response.status(404).json({ message: "Book not found" });
        }
        
        console.log("Book deleted successfully with ID:", id);
        return response.status(200).send({ message: "Book deleted successfully" });

    } catch (error) {
        console.log("Error deleting book:", error.message);
        return response.status(500).send({ message: error.message });
    }
});